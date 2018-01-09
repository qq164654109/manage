const hasPermission = (role, route) => {
  if (route.meta && route.meta.role) {
    return route.meta.role.some(item => item === role)
  } else {
    return true;
  }
};
export {hasPermission};
