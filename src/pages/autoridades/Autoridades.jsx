import CardPanel from '../../components/cardPanel/CardPanel'

const autoridades = [
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
    },
    {
        id: 5,
        nombre: "Sofía López",
        materia: "Inglés",
        email: "sofia.lopez@gmail.com",
        curso: "3° Año",
        turno: "Tarde",
        nivel: "Secundario",
        foto: "https://i.pravatar.cc/300?img=44"
    },
    {
        id: 6,
        nombre: "Miguel Torres",
        materia: "Biología",
        email: "miguel.torres@gmail.com",
        curso: "6° Año",
        turno: "Tarde",
        nivel: "Secundario",
        foto: "https://i.pravatar.cc/300?img=68"
    },
    {
        id: 7,
        nombre: "Ana Pérez",
        materia: "Geografía",
        email: "ana.perez@gmail.com",
        curso: "4° Año",
        turno: "Tarde",
        nivel: "Secundario",
        foto: "https://i.pravatar.cc/300?img=49"
    },
    {
        id: 8,
        nombre: "Diego Ramírez",
        materia: "Informática",
        email: "diego.ramirez@gmail.com",
        curso: "5° Año",
        turno: "Tarde",
        nivel: "Secundario",
        foto: "https://i.pravatar.cc/300?img=13"
    },
    {
        id: 9,
        nombre: "Valentina Díaz",
        materia: "Química",
        email: "valentina.diaz@gmail.com",
        curso: "6° Año",
        turno: "Tarde",
        nivel: "Secundario",
        foto: "https://i.pravatar.cc/300?img=45"
    },
    {
        id: 10,
        nombre: "Pablo Sánchez",
        materia: "Educación Física",
        email: "pablo.sanchez@gmail.com",
        curso: "3° Año",
        turno: "Tarde",
        nivel: "Secundario",
        foto: "https://i.pravatar.cc/300?img=59"
    }
];

const Autoridades = () => {

    const titulo = "Nuestras Autoridades";
    const subtitulo = "Conocé a las Autoridades que forman parte de nuestra institución.";

    return (
        <>
            <CardPanel users={autoridades} titulo={titulo} subtitulo={subtitulo}/>
        </>        
    );    
};

export default Autoridades;