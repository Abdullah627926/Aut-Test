import Form from "@/components/auth/form";
import { signIn } from "next-auth/react";
import { getSession } from "next-auth/react"

export default function SignIn() {
    const onSubmit = async (email, password) => {
        console.log(email, password)
        const data = await signIn('credentials', { redirect: true, email, password });


        console.log(data);
    };
    return <Form signin={true} onFormSubmit={onSubmit} />
};


export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
    if (session) {
        return {
            redirect: {
                destination: "/profile",
                permanent: false
            }
        }
    }

    return {
        props: {
            session
        }
    }
}
