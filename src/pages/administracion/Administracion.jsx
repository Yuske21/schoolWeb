import CardPanel from '../../components/cardPanel/CardPanel'

const administracion = [
    {
        id: 1,
        nombre: "María González",
        materia: "Lengua y Literatura",
        email: "maria.gonzalez@gmail.com",
        curso: "5° Año",
        turno: "Tarde",
        nivel: "Secundario",
        foto: "https://i.pravatar.cc/300?img=47"
    },
    {
        id: 2,
        nombre: "Carlos Rodríguez",
        materia: "Matemática",
        email: "carlos.rodriguez@gmail.com",
        curso: "4° Año",
        turno: "Tarde",
        nivel: "Secundario",
        foto: "https://i.pravatar.cc/300?img=12"
    },
    {
        id: 3,
        nombre: "Laura Fernández",
        materia: "Historia",
        email: "laura.fernandez@gmail.com",
        curso: "6° Año",
        turno: "Tarde",
        nivel: "Secundario",
        foto: "https://i.pravatar.cc/300?img=32"
    },
    {
        id: 4,
        nombre: "Juan Martínez",
        materia: "Física",
        email: "juan.martinez@gmail.com",
        curso: "5° Año",
        turno: "Tarde",
        nivel: "Secundario",
        foto: "https://i.pravatar.cc/300?img=11"
    }    
];

const Administracion = () => {

    const titulo = "Nuestras Administracion";
    const subtitulo = "Conocé a la Administracion que forman parte de nuestra institución.";

    return (
        <>
            <CardPanel users={administracion} titulo={titulo} subtitulo={subtitulo}/>
        </>        
    );    
};

export default Administracion;