//Form.tsx

//import { analyze } from "eslint-scope";



type FormPropsType = {
    setCity: React.Dispatch<React.SetStateAction<string | undefined>>
    getWeather: (e: any) => void
}


const Form = (props:FormPropsType) => {
    return (
        <form action="">
            <input type="text" name="city" placeholder="都市名" onChange={e => props.setCity(e.target.value)}/>
            <button type="submit" onClick={props.getWeather}>Get Weather</button>
        </form>

    );
};



export default Form;


//https://api.weatherapi.com/v1/current.json?key=9ff2e9b8c07a482e8aa125849220310&q=London&aqi=no