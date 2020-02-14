- [ ] Why would you use class component over function components (removing hooks from the question)?

Before hooks, they were used to hold stateful components. I would now only use them to be able to work with and update older code.

- [ ] Name three lifecycle methods and their purposes.

componentDidMount(): This method is called when the component is ready and mounted. It is the beginning stage of the component's lifecycle. It's what triggers the component to appear on screen. It can also take state which is updated by the next method.
componentDidUpdate(): When a user interacts with the UI and updates (basically does anything like a click or fills an input), it activates an update. If the code is written properly, it should check for the previous props and update them.
componentWillUnmount(): This method basically cleans everything up before unmounting and destroying the component in the browser.

- [ ] What is the purpose of a custom hook?

The purpose of a custom hook is to reuse it. It helps keep your code DRY.

- [ ] Why is it important to test our apps?

Testing our apps gives us confidence and checks for false positives. This means that we have evidence that our app functions properly. If it breaks after, we know it wasn't the original code, another developer must have changed something, a user must have done something different, etc.