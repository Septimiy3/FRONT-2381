import {useState} from "react";
import './index.css'
const Form = () => {
    const [activePage, setActivePage] = useState(1);
    const [formData, setFormData] = useState({
        page1: { input1: '', textarea1: '' },
        page2: { input2: '', checkbox2: false },
        page3: { input3: '', select3: '' },
    });

    const handleInputChange = (page, field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [page]: { ...prevData[page], [field]: value },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData[`page${activePage}`]);

        // Сброс значений полей после отправки формы
        setFormData((prevData) => ({
            ...prevData,
            [`page${activePage}`]: getInitialValues(activePage),
        }));
    };

// Функция для получения начальных значений полей для каждой страницы
    const getInitialValues = (page) => {
        switch (page) {
            case 1:
                return { input1: '', textarea1: '' };
            case 2:
                return { input2: '', checkbox2: false };
            case 3:
                return { input3: '', select3: '' };
            default:
                return {};
        }
    };

    return (
        <div className="page-container">
            <form onSubmit={handleSubmit}>
                <div className={`page ${activePage === 1 ? 'active' : 'inactive'}`}>
                    <label>
                        <div className='form-row'>
                            Введите ваше Имя
                            <input
                                type="text"
                                value={formData.page1.input1}
                                onChange={(e) => handleInputChange('page1', 'input1', e.target.value)}
                            />
                        </div>

                    </label>
                    <br />
                    <label>
                        <div className='form-row'>
                            Введите описание о себе
                            <textarea
                                value={formData.page1.textarea1}
                                onChange={(e) => handleInputChange('page1', 'textarea1', e.target.value)}
                            />
                        </div>
                    </label>
                </div>

                <div className={`page ${activePage === 2 ? 'active' : 'inactive'}`}>
                    <label>
                        <div className='form-row'>
                            Укажите ваш номер телефона
                            <input
                                type="text"
                                value={formData.page2.input2}
                                onChange={(e) => handleInputChange('page2', 'input2', e.target.value)}
                            />
                        </div>
                    </label>
                    <br />
                    <label>
                        <div className='form-row'>
                            Вы согласны с обработкой персональных данных?
                            <input
                                type="checkbox"
                                checked={formData.page2.checkbox2}
                                onChange={(e) => handleInputChange('page2', 'checkbox2', e.target.checked)}
                            />
                        </div>
                    </label>
                </div>

                <div className={`page ${activePage === 3 ? 'active' : 'inactive'}`}>
                    <label>
                        <div className='form-row'>
                            Напишите ваш город
                            <input
                                type="text"
                                value={formData.page3.input3}
                                onChange={(e) => handleInputChange('page3', 'input3', e.target.value)}
                            />
                        </div>
                    </label>
                    <br />
                    <label>
                        <div className='form-row'>
                            Выбирите что-то и списка
                            <select
                                value={formData.page3.select3}
                                onChange={(e) => handleInputChange('page3', 'select3', e.target.value)}
                            >
                                <option value="">Список товаров</option>
                                <option value="option1">Товар 1</option>
                                <option value="option2">Товар 2</option>
                                <option value="option3">Товар 3</option>
                            </select>
                        </div>
                    </label>
                </div>

                <div className="button-container">
                    <button type="submit">Submit</button>
                </div>
            </form>

            <div className="button-container">
                <button className={activePage === 1 ? 'active' : ''} onClick={() => setActivePage(1)}>
                    Page 1
                </button>
                <button className={activePage === 2 ? 'active' : ''} onClick={() => setActivePage(2)}>
                    Page 2
                </button>
                <button className={activePage === 3 ? 'active' : ''} onClick={() => setActivePage(3)}>
                    Page 3
                </button>
            </div>
        </div>
    );
}
export default Form