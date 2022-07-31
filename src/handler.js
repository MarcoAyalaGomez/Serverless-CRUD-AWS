"use strict";

module.exports.hello = async (event) => {

//code
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Estamos redi Funcion ejecutada siseñor!",
        input: event,
      },
      null,
      2
    ),
  };
};
