
export const checkEmailExists = (email: string, type: 'user' | 'owner'): boolean => {
  if (!email) return true;
  
  const userData = localStorage.getItem('userData');
  const ownerData = localStorage.getItem('ownerData');
  
  if (type === 'user') {
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      return parsedUserData.email === email;
    }
  } else {
    if (ownerData) {
      const parsedOwnerData = JSON.parse(ownerData);
      return parsedOwnerData.email === email;
    }
  }
  
  return false;
};

export const createUserData = (formData: any) => ({
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  loginTime: new Date().toISOString()
});

export const createOwnerData = (formData: any) => ({
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  loginTime: new Date().toISOString()
});
