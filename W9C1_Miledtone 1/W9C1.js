import "dotenv/config";

const secretKey=process.env.SECRET_KEY;

console.log(Process.key);

// useKey(secretKey);

function useKey(key){

    console.log("THe following secret was",secretKey);

};