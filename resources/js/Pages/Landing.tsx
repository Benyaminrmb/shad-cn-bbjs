import React from 'react';
import GuestLayout2 from "@/Layouts/GuestLayout2";
import {Button} from "@/Components/ui/button";



interface LandingProps {
    message: string;
}

export default function Landing({ message }: LandingProps) {
    const aaa = message.replace('message', 'dddddddddd');

    return (
        <GuestLayout2>
            <div>
                <Button>Click me</Button>
                awdawd {aaa}
            </div>
        </GuestLayout2>
    );
}
