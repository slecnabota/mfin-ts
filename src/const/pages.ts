import cashImage from '@/assets/img/icon1.svg';
import accountsImage from '@/assets/img/accounts.svg';
const pages = {
    cash:{
        cashImage,
        heading: 'Деньги/Cash flow',
        subheading:'Отчет о движении денежных средств',
        parent: 'analytics'
    },
    accounts:{
        accountsImage,
        heading: 'Счета',
        parent: 'settings',
    },
    addPages:{
        parent:'accounts',
    },
    editPages:{
        parent:'accounts',
    },
    mail:{
        parent: 'loginpage',
    },
    resetpass:{
        parent: 'loginpage',
    },
    offer:{
        parent: 'registerpage',
    }
}
export default pages;