{
  // Promise
  // Recent version NodeJS supports async/await syntax and fetch API...(!!!)
  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };
  const getTodo = async (): Promise<Todo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data);
    return data;
  };

  getTodo();
  // Simulate
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "Something";
      if (data) {
        resolve(data);
      } else {
        reject("Failed to get data");
      }
    });
  };

  // Calling createPromise
  const showData = async (): Promise<string> => {
    const data: string = await createPromise();
    console.log(data);
    return data;
  };

  showData();
}
