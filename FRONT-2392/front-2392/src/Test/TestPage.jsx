import React, {useEffect, useRef, useState} from 'react';

const TestPage = () => {
    const [hoveredButton, setHoveredButton] = useState(null);

    // Функция для изменения цвета при наведении
    const handleHover = (buttonId) => {
        setHoveredButton(buttonId);
    };

    useEffect(() => {
        console.log('Монтирование')
        // Определяем панель навигации
        const navigationPanel = document.getElementById('navigationPanel');
        // Навешиваем слушатель на панель навигации
        const handleMouseOver = (event) => {
            // Проверяем, что событие произошло на кнопке
            if (event.target.classList.contains('navButton')) {
                // Получаем id кнопки и вызываем функцию handleHover
                handleHover(event.target.id);
            }
        };
        // Навешиваем слушатель на панель навигации
        navigationPanel.addEventListener('mouseover', handleMouseOver);
        // Навешиваем слушатель на панель навигации для сброса состояния при уходе курсора
        const handleMouseOut = () => {
            setHoveredButton(null);
        };
        navigationPanel.addEventListener('mouseout', handleMouseOut);

        // Очистка слушателей при размонтировании компонента
        return () => {
            navigationPanel.removeEventListener('mouseover', handleMouseOver);
            navigationPanel.removeEventListener('mouseout', handleMouseOut);
            console.log('размонтирование')
        };
    }, [hoveredButton]);

    return (
        <div id="navigationPanel">
            {/* Кнопки панели навигации */}
            <div className={`navButton ${hoveredButton === 'button1' ? 'hovered' : ''}`} id="button1">
                Кнопка 1
            </div>
            <div className={`navButton ${hoveredButton === 'button2' ? 'hovered' : ''}`} id="button2">
                Кнопка 2
            </div>
            <div className={`navButton ${hoveredButton === 'button3' ? 'hovered' : ''}`} id="button3">
                Кнопка 3
            </div>
        </div>
    );
};

export default TestPage;
