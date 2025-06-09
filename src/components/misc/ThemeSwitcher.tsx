"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return (
        <Button isIconOnly className="p-2">
            <SunIcon className="size-4" />
        </Button>
    );

    return (
        <div>
            {theme == 'dark' ? (
                <Button isIconOnly className="p-2" onPress={() => setTheme('light')}>
                    <SunIcon className="size-4" />
                </Button>
            ) : (
                <Button isIconOnly className="p-2" onPress={() => setTheme('dark')}>
                    <MoonIcon className="size-4" />
                </Button>
            )}
        </div>
    )
};