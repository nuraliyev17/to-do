const { useState } = require("react");

function TableForm({ addUser }) {
    const [names, setName] = useState('');
    const [job, setJob] = useState('');

    const handlesumbit = (e) => {
        e.preventDefault();
        if (!names || !job) return;
        addUser({ names, job })

        setName('');
        setJob('');

    }

    return (
        <form onSubmit={handlesumbit} style={{ marginBottom: '20px' }}>
            <input
                placeholder="Ismingizni kiriting"
                type="text"
                value={names}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                placeholder="Lavozangizni kiriting"
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
            />
            <button> Qo'shish</button>


        </form>
    )
}



export default TableForm;