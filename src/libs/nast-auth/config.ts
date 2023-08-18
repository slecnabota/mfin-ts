interface ConfigOptions {
    loginRoute: string;
    authRoute: string;
    apiAuth: (token: string) => void;
  }
  
  const config = (key: keyof ConfigOptions) => {
    const options: ConfigOptions = {
      loginRoute: 'loginpage',
      authRoute: 'payments',
      apiAuth: (token: string) => {
        console.log(`API authentication using token: ${token}`);
      },
    };
  
    return options[key];
    console.log("options key")
  };
  
  
  export default config;
  