import HelloWorldComponent from './components/BuilderIoComponents/HelloWorld.vue'

export const REGISTERED_COMPONENTS = [
    {
        component: HelloWorldComponent,
        name: 'Hello World',
        inputs: [
            {
                name: 'text',
                type: 'string',
                defaultValue: 'World',
            },
        ],
    },
]


export const getRegisteredComponents = () => REGISTERED_COMPONENTS