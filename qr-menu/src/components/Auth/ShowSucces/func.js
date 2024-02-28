const showSuccess = (toast) => {
    console.log(toast)
    toast.current.show({severity:'success', summary: 'Success', detail:'Welcome to your account!', life: 3000, position: 'top-left'});
}

export default showSuccess;