const showSuccess = (toast) => {
    toast.current.show({severity:'success', summary: 'Success', detail:'Welcome to your account!', life: 3000});
}

export default showSuccess;