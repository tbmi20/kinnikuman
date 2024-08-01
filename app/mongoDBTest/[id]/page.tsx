export default function Page({ params }: {params: {id: string}}) {
    return (
        <div>
            <h1>Account {params.id}</h1>
            <p>This is the account page</p>
        </div>
    );
}