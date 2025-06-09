"use client";
import {useUserStore} from "@/app/store/useUserStore";

export default function Home() {
    // Сизге user гана керек болсо, калганын алып салыңыз
    const { user } = useUserStore();

    return (
        <div className="">
            <div>
                {/* user?.id колдонулуп жатат */}
                <p>{ user?.id}</p>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi debitis, deleniti dolorem ea
                    et explicabo fugiat laudantium perferendis sunt. Aliquid eaque, quos. A accusamus adipisci animi
                    dignissimos nesciunt suscipit.
                </div>
                {/* ... калган коддор */}
            </div>
        </div>
    );
}