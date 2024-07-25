type FetchExample = {
    id: number;
    name: string;
    email: string;
}

export default async function Page() {
    const res = await fetch('https://api.example.com/data');
    const data: FetchExample = await res.json();
    return <h1>{data.name}</h1>
}