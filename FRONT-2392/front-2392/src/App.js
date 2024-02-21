import './App.css';
import {useEffect, useState} from "react";
import TestPage from "./Test/TestPage";

function App() {

    const [hoveredButton, setHoveredButton] = useState(null);

    useEffect(() => {
        console.log('mount')
        const handleMouseEnter = (e) => {
            const buttonId = e.target.id;
            setHoveredButton(buttonId);
            e.target.style.backgroundColor = 'red';
        };

        const handleMouseLeave = (e) => {
            setHoveredButton(null);
            e.target.style.backgroundColor = '';
        };

        const buttons = document.querySelectorAll('.header-button');
        buttons.forEach((button) => {
            button.addEventListener('mouseenter', handleMouseEnter);
            button.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            console.log('unmount')
            buttons.forEach((button) => {
                button.removeEventListener('mouseenter', handleMouseEnter);
                button.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [hoveredButton]);

    useEffect(() => {
        // В этом useEffect вы можете использовать состояние hoveredButton
        console.log(`Курсор наведен на кнопку с ID: ${hoveredButton}`);
    }, [hoveredButton]);

    return (
        <div className="App">
            <header className="App-header">
                <ul className="header-list">
                    <li className="header-item">
                        <button className="header-button" id="menu1">
                            Меню 1
                        </button>
                    </li>
                    <li className="header-item">
                        <button className="header-button" id="reports">
                            Отчёты
                        </button>
                    </li>
                    <li className="header-item">
                        <button className="header-button" id="menu2">
                            Какое-то меню ещё
                        </button>
                    </li>
                    <li className="header-item">
                        <button className="header-button" id="newButton">
                            Новая кнопка
                        </button>
                    </li>
                    <li className="header-item">
                        <button className="header-button" id="menu3">
                            Меню 3
                        </button>
                    </li>
                    <li className="header-item">
                        <button className="header-button" id="superButton">
                            Супер кнопка
                        </button>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default App;
