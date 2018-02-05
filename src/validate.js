export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';
export const exactLength = value =>
    value.length === 5
        ? undefined
        : `Must contain exactly 5 characters`;
export const onlyNumbers = value =>
    /^\d+$/.test(value) ? undefined : 'Must only contain numbers';
