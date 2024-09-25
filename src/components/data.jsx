import React from 'react'
import './data.css'




export const Data = () => {
    return (
        <div>
            <h1 className='encabezado'> Introducción </h1>
            <br />
            <hr />
        <div className='cuerpo'>
            <p className='encabezado'> ¿ Qué es el manejo global ?</p>
            <p className='text'>
            El manejo global en React es una estrategia para gestionar eficientemente el estado en aplicaciones de esta tecnología. Implica centralizar y coordinar el estado de toda la aplicación, permitiendo que múltiples componentes accedan y modifiquen el mismo estado sin pasar props manualmente. Esta técnica mejora la organización del código, reduce bugs relacionados con el estado mutable y optimiza el rendimiento.
            Herramientas populares como Redux, Zustand y MobX facilitan la implementación del manejo global. Cada una tiene sus propias características, pero todas comparten el objetivo de simplificar la gestión del estado en aplicaciones complejas.
            La implementación típica consiste en crear un "store" central que contiene el estado y las funciones para modificarlo. Componentes individuales pueden luego acceder y actualizar este estado global utilizando hooks específicos.
            Aunque puede parecer complejo, el manejo global en React resulta en aplicaciones más manejables y escalables. Es particularmente útil para proyectos medianos y grandes, aunque para aplicaciones pequeñas puede ser excesivo. La elección entre este enfoque y el estado local depende del tamaño y las necesidades específicas del proyecto.
            </p>
            <br />
            <hr />
            <p className='encabezado'>¿ Porqué utilizar Zustand ?</p>
            <p className='text'>El manejo global enfocado en Zustand es una estrategia para gestionar el estado en aplicaciones React de manera centralizada y eficiente. Aquí te explico los puntos clave sobre este enfoque: <br/><br />
            
                    <p className='encabezado'>¿ Qué es Zustand ?</p><br />

                    Zustand es una biblioteca de gestión de estado para React que ofrece una forma sencilla y eficiente de administrar el estado en aplicaciones de React. Sus principales características son: <br /><br />

                        - Sencillez y minimalismo <br />
                        - Basado en Hooks <br />
                        - Configuración ligera <br />
                        - Estado mutable o inmutable <br />
                        - No impone arquitectura <br />
                        - Rendimiento óptimo <br />
                        - Fácil integración con Middleware <br />
                        - Compatibilidad universal <br /><br />

                    Ventajas del manejo global con Zustand <br /><br />

                    Algunas de las ventajas de utilizar Zustand para el manejo global del estado incluyen:<br /><br />

                        - Centralización del estado: Permite compartir el estado entre múltiples componentes de manera eficiente .<br />
                        - Simplicidad: Ofrece una API sencilla y directa, facilitando la creación y gestión de estados globales sin necesidad de configuraciones extensas.<br />
                        - Flexibilidad: No impone una arquitectura específica, permitiendo estructurar el estado según las necesidades de la aplicación.<br />
                        - Rendimiento optimizado: Utiliza actualizaciones de estado inmutables, lo que puede ayudar a prevenir errores relacionados con el estado mutable en aplicaciones grandes.<br />
            </p>



        </div>        
        </div>
    )
}
