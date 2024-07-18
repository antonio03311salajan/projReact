import Button from "./components/Button.jsx"
import Window from "./components/Window.jsx"
function App() {
    return(
        <Window>
            <Button position={"top-left"} num={"1"} />
            <Button position={"top-right"} num={"2"} />
            <Button position={"bottom-left"} num={"3"} />
            <Button position={"bottom-right"} num={"4"} />
        </Window>
    );
}

export default App
