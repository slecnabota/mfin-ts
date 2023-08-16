import IMask from 'imask';
import * as validations from './validations';
import config from '@/config/formConfig';
import store from '@/store/index';

interface Rule {
    [key: string]: string[];
}
interface FormErrors {
    [formName: string]: {
      [fieldName: string]: string[]; // An array of error messages
    };
  }
  
  interface StoreState {
    formValues: Record<string, Record<string, any>>;
    formErrors: FormErrors;
    // ... other properties
  }
class Form {
    private formName = '';
    private rules: Rule = {};
    private masks: Record<string, string> = {};

    private generateRandomId(): string {
        return Math.random().toString(36).substring(2, 15);
    }

    public init(values: Record<string, any>): void {
        this.formName = this.generateRandomId();
        store.commit("setValues", { formName: this.formName, values });
    }

    public setRules(rules: Rule): void {
        this.rules = { ...rules };
    }

    public getStore(): any {
        return store.state;
    }

    public get(name: string | null = null): any {
        const formValues = this.getStore().formValues[this.formName];
        if (name === null) {
            return formValues;
        } else {
            return formValues[name];
        }
    }

    public set(name: string, value: any): void {
        this.getStore().formValues[this.formName][name] = value;
    }

    public setMasks(masks: Record<string, string>): void {
        this.masks = { ...masks };
    }

    public getMask(name: string): string | null {
        return this.masks[name] || null;
    }

    public applyMask(name: string, value: string): string {
        const mask = this.getMask(name);
        if (mask) {
            const maskInstance = IMask.createMask({ mask });
            return maskInstance.resolve(value);
        }
        return value;
    }

    public input(name: string): any {
        return config.input(name, this);
    }

    public validate(): boolean {
        let result = true;
        this.getStore().formErrors[this.formName] = {};
        const formValues = this.getStore().formValues[this.formName];
        for (const name in formValues) {
            const rules = this.rules[name];
            if (rules && rules.length) {
                for (const rule of rules) {
                    const ruleSplit = rule.split(':');
                    const ruleName = ruleSplit[0];
                    const ruleParam = ruleSplit[1];
                    const validation = validations[ruleName as keyof typeof validations];
                    if (validation) {
                        if (!validation(formValues, name, ruleParam)) {
                            result = false;
                            if (!this.getStore().formErrors[this.formName][name]) {
                                this.getStore().formErrors[this.formName][name] = [];
                            }
                            const message = config.messages[ruleName] || 'Error';
                            this.getStore().formErrors[this.formName][name].push(message);
                        }
                    } else {
                        console.error(`Validation with name '${ruleName}' was not found`);
                    }
                }
            }
            let resultMask = true;
            if (this.masks[name]) {
                if (!validations.maskFilled(this.applyMask(name, this.get(name)), name, this.getMask(name))) {
                    resultMask = false;
                    if (!this.getStore().formErrors[this.formName][name]) {
                        this.getStore().formErrors[this.formName][name] = [];
                    }
                    const message = config.messages.mask || 'Error';
                    this.getStore().formErrors[this.formName][name].push(message);
                }
            }
        }
        return result;
    }
}

export default Form;
