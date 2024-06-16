const saveSuccess = toast => {
  if(toast.current){
  toast.current.show({
    severity: 'success',
    summary: 'Success',
    detail: 'Your changes have been succesfully saved!',
    life: 3000,
    position: 'center',
  });
}
  console.log(toast);
};

export default saveSuccess;
