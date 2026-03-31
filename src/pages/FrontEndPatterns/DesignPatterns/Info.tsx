const Info = () => {
    return (
        <section className="ExampleContainer">
            <h3>🧠 🔥 How a Senior Thinks</h3>
            <p>A senior doesn’t just “know patterns”—they:</p>
            <h3>Choose the right tool</h3>
            <table>
                <thead>
                    <tr>
                        <th><strong>Problem</strong></th>
                        <th><strong>Solution</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Reusable logic</td>
                        <td>Custom hooks</td>
                    </tr>
                    <tr>
                        <td>Flexible UI</td>
                        <td>Composition / Headless</td>
                    </tr>
                    <tr>
                        <td>Global state</td>
                        <td>Context / Zustand</td>
                    </tr>
                    <tr>
                        <td>Complex UI components</td>
                        <td>Compound components</td>
                    </tr>
                </tbody>
            </table>
            <h3> 2.- Evaluate trade-offs</h3>
            <ul className="left">
                <li>❗ Readability vs abstraction</li>
                <li>❗ Performance vs simplicity</li>
                <li>❗ Reusability vs complexity</li>
            </ul>
            <h3>3.- Understand modern trends</h3>
            <p>In real-world Reacts apps</p>
            <ul className="left">
                <li>❌ Less HOCs</li>
                <li>❌ Less Render Props</li>
                <li>✅ More Hooks</li>
                <li>✅ More Headless + Compound</li>
                <li>✅ More server-state libraries (React Query)</li>
            </ul>
        </section>
    )
}

export default Info; 