import React from 'react';

class Task extends React.Component {

    render() {
        return (

            <div>
                <h2>Task_3</h2>
                <hr />
                <p>Przygotowanie aplikacji, która będzie pobierała cytaty z API, która będzie wyświetlała losowy cytat.</p>
                <a href = 'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json'>Link to API</a>
                <p> Dodatkowo stwórz przycisk który umożliwi wylosowanie następnego cytatu oraz przycisk, którypozwoli na powrót do poprzedniego cytatu.</p>
                <hr/>
            </div>
        )


    }
}

export default Task;