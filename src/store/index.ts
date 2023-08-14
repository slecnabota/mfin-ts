import { createStore, Store } from 'vuex';

interface RootState {
    email: string;
    formValues: Record<string, any>;
    formErrors: Record<string, any>;
}

interface FormValues {
    [formName: string]: any;
}

interface FormErrors {
    [formName: string]: any;
}

const store: Store<RootState> = createStore({
    state: {
        email: "example@gmail.com",
        formValues: {},
        formErrors: {},
    },
    mutations: {
        setEmail(state, email: string) {
            state.email = email;
        },
        setValues(state, { formName, values }: { formName: string; values: any }) {
            state.formValues = {
                ...state.formValues,
                [formName]: values,
            };
        },
        setErrors(state, { formName, errors }: { formName: string; errors: any }) {
            state.formErrors = {
                ...state.formErrors,
                [formName]: errors,
            };
        },
        initialiseStore(state) {
            if (localStorage.getItem('email')) {
                state.email = localStorage.getItem('email')!;
            }
        },
    },
    actions: {},
    modules: {},
});

store.subscribe((mutation, state) => {
    if (mutation.type === 'setEmail') {
        localStorage.setItem('email', state.email);
    }
});

export default store;
