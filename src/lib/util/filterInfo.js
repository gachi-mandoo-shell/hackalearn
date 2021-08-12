const filterInfo = ( data, location) => {
    const result = [];
    Object.keys(data.datas).forEach(
      (key) => {
        if (data.datas[key].location === location)
          result.push(
            {
              ...data.datas[key],
              id: key,
            }
          )
      });
    return result
  }

export default filterInfo;
