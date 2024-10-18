import logo from "./logo.svg";
import "./App.css";
import Greet from "./component/Greet";
import Hello from "./component/Hello";
import Message from "./component/Message";
import Counter from "./component/Counter";
import Welcome from "./component/Welcome";
import FunctionClick from "./component/FunctionClick";
import ClassClick from "./component/ClassClick";
import EventBinding from "./component/EventBinding";
import second from "./component/combobox";
function App() {
    return (
        <div className="App">
            <second />
            {/* <Counter /> */}
            {/* <Message /> */}
            {/* <Greet name="Bruse" heroName="Batman">
        <p>This is Burse children paragraph</p>
      </Greet> */}
            {/* <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet> */}
            {/* <Greet name="Diana" heroName="Wonder Woman"/> */}
            {/* <Welcome name="Clark" heroName="Superman" /> */}
            {/* <Hello /> */}
            {/* <FunctionClick /> */}
            {/* <ClassClick /> */}
            <EventBinding />

            <Card className="relative max-w-60">
                <Button
                    className="rounded-lg bg-accent p-0 text-card-foreground sm:h-12 sm:w-12"
                    renderAs="span"
                    size="icon"
                    variant="ghost"
                >
                    <C className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
                <div className="absolute right-4 top-4 text-card-description">
                    <i className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <CardContent>
                    <CardTitle className="text-base">Users</CardTitle>
                    <CardDescription>
                        Manage user accounts and permissions.
                    </CardDescription>
                </CardContent>
            </Card>
        </div>
    );
}

export default App;
