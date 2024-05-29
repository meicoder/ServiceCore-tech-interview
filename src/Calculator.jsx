const rows = [
    ['C', 'CE', 'DEL', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['.', '0', '=']
];
export const Calculator = () => {
    return (
        <section>
            <h1>Calculator</h1>
            <div role="grid">
                {rows.map((row, index) => (
                    <div key={index} role="row">
                        {row.map((label) => (
                            <button key={label}>{label}</button>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};
