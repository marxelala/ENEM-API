const getEnem = async () => {
    try {
      const response = await api.get('/exams');
      return response.data;
    } catch (error) {
      console.log({ error });
      return error;
    }
  };
  
