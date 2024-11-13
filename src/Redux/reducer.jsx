const welcomenote='Hi Welcome to Redux';
const count=10;
const mydata={
    course:'React JS',
    duration:'1 Month',
    institute:'Jeevan-IT'
}

export default function reducer(state={welcomenote,mydata,count},action){

    const {type,payload}=action ||{};

    switch(type){
        case "ADD":
            return{...state,count:state.count+1};
        case "DELETE":
            return{...state,count:state.count-1};
        default:
            return state;
    }

    
};

