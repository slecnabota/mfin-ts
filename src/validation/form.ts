import IMask from 'imask';
import * as validations from './validations.js';
import config from '../config/formConfig.js';
import store from '../store/index.js';

interface Rule {
    [key: string]: string[];
}

interface Mask {
    [key: string]: string;
}



class Form {
    formName: string = '';
    rules: Rule = {};
    masks: Mask = {};
    generateRandomId(): string {
        return Math.random().toString(36).substring(2, 15);
    }

    init(values: any): void {
        this.formName = this.generateRandomId();
        store.commit("setValues", { formName: this.formName, values });
    }

    setRules(rules: Rule): void {
        this.rules = { ...rules };
    }

    getStore() {
        return store.state;
    }

    get(name: string | null = null): any {
        if (name === null) {
            return this.getStore().formValues[this.formName];
        }
        return this.getStore().formValues[this.formName][name];
    }

    set(name: string, value: any): void {
        this.getStore().formValues[this.formName][name] = value;
    }
    setMasks(masks: Mask): void {
        this.masks = { ...masks };
    }

    getMask(name: string): string | null {
        return this.masks[name] || null;
    }

    applyMask(name: string, value: any): any {
        const mask = this.getMask(name);
        if (mask) {
            const maskInstance = IMask.createMask({ mask });
            return maskInstance.resolve(value);
        }
        return value;
    }

    input(name: string | null): any {
        if (name === null) {
            // Обработка случая, когда name равен null
            return null; // или другая логика по вашему выбору
        }
    
        return config.input(name, this);
    }
    validate(): boolean {
        let result: boolean = true;
        this.getStore().formErrors[this.formName] = {};

        for (const name in this.getStore().formValues[this.formName]) {
            const rules = this.rules[name];

            if (rules && rules.length) {
                for (const rule of rules) {
                    const ruleSplit = rule.split(':');
                    const ruleName = ruleSplit[0];
                    const ruleParam = ruleSplit[1];
                    const validation = validations[ruleName] as (formValues: any, fieldName: string, ruleParam?: string) => boolean;

                    if (validation) {
                        if (!validation(this.getStore().formValues[this.formName], name, ruleParam)) {
                            result = false;

                            if (!this.getStore().formErrors[this.formName][name]) {
                                this.getStore().formErrors[this.formName][name] = [];
                            }

                            const message = config.messages[ruleName] || 'Error';
                            this.getStore().formErrors[this.formName][name].push(message);
                        }
                    } else {
                        console.error('Validation with name `' + ruleName + '` was not found');
                    }
                }
            }

            let resultMask: boolean = true;
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
