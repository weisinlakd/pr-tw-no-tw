import React, { useContext, useState } from 'react';
import { PrimeReactContext } from 'primereact/api';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

export default function App2() {
    const { changeTheme } = useContext(PrimeReactContext);
    const [theme, setTheme] = useState('md-light-indigo');

    const themes = [
        'bootstrap4-light-blue', 'bootstrap4-light-purple', 'bootstrap4-dark-blue', 'bootstrap4-dark-purple',
        'md-light-indigo', 'md-light-deeppurple', 'md-dark-indigo', 'md-dark-deeppurple',
        'mdc-light-indigo', 'mdc-light-deeppurple', 'mdc-dark-indigo', 'mdc-dark-deeppurple',
        'tailwind-light', 'fluent-light', 'lara-light-blue', 'lara-light-indigo',
        'lara-light-purple', 'lara-light-teal', 'lara-dark-blue', 'lara-dark-indigo',
        'lara-dark-purple', 'lara-dark-teal', 'soho-light', 'soho-dark',
        'viva-light', 'viva-dark', 'mira', 'nano', 'saga-blue', 'saga-green',
        'saga-orange', 'saga-purple', 'vela-blue', 'vela-green', 'vela-orange',
        'vela-purple', 'arya-blue', 'arya-green', 'arya-orange', 'arya-purple'
    ].map(theme => ({ label: theme, value: theme }));

    const handleThemeChange = (e) => {
        const newTheme = e.value;
        setTheme(newTheme);
        
        const link = document.getElementById('theme-link');
        if (link) {
            link.href = `/themes/${newTheme}/theme.css`;
        } else {
            console.error("Theme link element not found!");
        }
    
        changeTheme(theme, newTheme, 'theme-link', () => console.log(`Theme changed to ${newTheme}`));
    };
    

    const categories = [
        { label: 'Technology', value: 'tech' },
        { label: 'Finance', value: 'finance' },
        { label: 'Health', value: 'health' }
    ];

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', fontSize: '24px' }}>PrimeReact Without Tailwind</h1>
            
            <Panel header="Theme Selector" style={{ marginBottom: '20px' }}>
                <Dropdown value={theme} options={themes} onChange={handleThemeChange} placeholder="Select a theme" style={{ width: '100%' }} />
            </Panel>
            
            <Panel header="User Form" style={{ padding: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="name">Name</label>
                    <InputText id="name" style={{ width: '100%', padding: '5px' }} placeholder="Enter your name" />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email">Email</label>
                    <InputText id="email" style={{ width: '100%', padding: '5px' }} placeholder="Enter your email" />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="category">Category</label>
                    <Dropdown id="category" options={categories} placeholder="Select a category" style={{ width: '100%' }} />
                </div>
                <Button label="Submit" style={{ width: '100%', marginTop: '10px' }} />
            </Panel>
        </div>
    );
}
