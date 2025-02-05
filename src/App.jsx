import React from 'react'; 
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

export default function TailwindDemo() {
    const categories = [
        { label: 'Technology', value: 'tech' },
        { label: 'Finance', value: 'finance' },
        { label: 'Health', value: 'health' }
    ];

    return (
        <div
            className="
          bg-white
          dark:bg-gray-800
          p-10
          rounded-xl
          flex flex-col
          gap-8
          max-w-3xl
        "
        >
            <h1 className="text-4xl text-black dark:text-white font-bold text-center">
                Tailwind CSS + PrimeReact
            </h1>

            <Panel header="Default Preset">
                <p>
                    First panel component uses the global pass-through preset from the
                    Tailwind CSS-based implementation of PrimeOne Design 2023.
                </p>
            </Panel>

            <Panel
                header="Custom Header Design"
                pt={{
                    header:
                        'p-5 flex items-center justify-between border border-indigo-300 bg-indigo-500 text-indigo-50 rounded-tl-lg rounded-tr-lg dark:bg-indigo-900 dark:border-indigo-900/40 dark:text-white/80',
                }}
            >
                <p>
                    Second panel overrides the header section with a custom style.
                </p>
            </Panel>

            <Panel
                header="Custom Design"
                ptOptions={{ mergeSections: false }}
                pt={{
                    header:
                        'flex items-center justify-center p-5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-tl-2xl rounded-tr-2xl text-white',
                    title: 'leading-none font-bold uppercase text-2xl',
                    content:
                        'bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 px-5 pb-8 pt-3 text-white text-center rounded-bl-2xl rounded-br-2xl text-xl',
                }}
            >
                <p>
                    Third panel ignores the default preset with
                    <b> mergeSections: false</b> and applies a custom style to all elements
                    of the panel instead.
                </p>
            </Panel>

            <Panel header="Interactive Elements" className="p-4">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-semibold">Name</label>
                        <InputText id="name" className="w-full p-2 border rounded-md" placeholder="Enter your name" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-semibold">Email</label>
                        <InputText id="email" className="w-full p-2 border rounded-md" placeholder="Enter your email" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="category" className="text-sm font-semibold">Category</label>
                        <Dropdown id="category" options={categories} placeholder="Select a category" className="w-full" />
                    </div>
                    <Button label="Submit" className="bg-indigo-500 hover:bg-indigo-700 text-white p-2 rounded-md" />
                </div>
            </Panel>
        </div>
    );
}