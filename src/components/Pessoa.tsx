type Props = {
    data: {
        name: String;
        age: number;
    }
}

export const Pessoa = ({data}: Props) => {
    return (
        <li>
            {data.name} - {data.age} anos.
        </li>
    );
}