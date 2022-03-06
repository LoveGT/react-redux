export function isAuth(flag = 0) {
  console.log(flag, "flag");
  flag =  localStorage.getItem('auth')
  return flag;
}
