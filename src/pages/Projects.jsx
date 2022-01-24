import React from 'react'
import ButtonsBottom from '../components/ButtonsBottom'
import Logo from '../components/Logo'
import Mouse from '../components/Mouse'
import Navigation from '../components/Navigation'
import Project from '../components/Project'

export function Service() {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={0} />
                <ButtonsBottom left={'/'} right={'/vision'} />
            </div>
        </main>
    )
};
export function Vision() {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={1} />
                <ButtonsBottom left={'/Services'} right={'/strategie'} />
            </div>
        </main>
    )
};
export function Strategie() {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={2} />

                <ButtonsBottom left={'/vision'} right={'/ecosysteme'} />
            </div>
        </main>
    )
};
export function Ecosystem() {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={3} />
                <ButtonsBottom left={'/strategie'} right={'/contact'} />
            </div>
        </main>
    )
};

