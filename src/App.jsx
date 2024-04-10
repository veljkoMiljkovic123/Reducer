import { useEffect, useReducer } from "react"
import ProductsService from "./services/productsService"
import { INITIAL_STATE, productsReducer } from "./store/productsReducer"
import ProductsComponent from "./components/ProductsComponent"


function App() {
  const[state,dispatch] = useReducer(productsReducer,INITIAL_STATE)




  function handleData(){
      //fetch start
      dispatch({type: 'FETCH_START'})

      ProductsService.getAllProdycts()
      .then(res=> dispatch({type:'FETCH_SUCCESS',data: res.data.products }))
      .catch(err=>dispatch({type:'FETCH_ERROR'}))
  }

  //ERROR OVDE!!
  if(state.error){
    return <h2>Tihomire imas gresku</h2>
  }

  return  <div className="flex justify-center items-center flex-col mt-10">
     <button className="bg-red-400 text-white px-6 py-3 rounded-2xl" onClick={handleData}>Fetch Data on Click</button>

     {state.isLoading? (<h2>Loading...</h2>):(<>
     {state.products.map((el,i)=>{
      return <div key={i}>
        <h2>{el.title}</h2>
        <img src={el.thumbnail} alt={el.title} />
      </div>
     })}
     </>)}
    </div>
  
}

export default App
