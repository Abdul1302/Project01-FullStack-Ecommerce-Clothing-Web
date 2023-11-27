'use client'
import logo from 'public/Logo.webp'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { Menu } from 'lucide-react'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'

import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'



function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (

        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image src={logo} alt='logo' />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12 ">

                    <a href="/" className="text-sm font-semibold leading-6 text-black hover:scale-110 duration-300">
                        Home
                    </a>

                    <a href="/category/Male" className="text-sm font-semibold leading-6 text-black hover:scale-110 duration-300">
                        Male
                    </a>

                    <a href="/category/Female" className="text-sm font-semibold leading-6 text-black hover:scale-110 duration-300">
                        Female
                    </a>
                    <a href="/category/Kids" className="text-sm font-semibold leading-6 text-black hover:scale-110 duration-300">
                        Kids
                    </a>
                    <a href="/products" className="text-sm font-semibold leading-6 text-black hover:scale-110 duration-300">
                        All Products
                    </a>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href="#"
                        className="inline-block rounded-full border border-transparent bg-gray-300 mr-12  px-3 py-3 text-center font-medium text-black hover:scale-110 hover:shadow-lg duration-300 "
                    >
                        <ShoppingCart />
                    </a>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image src={logo} alt='logo' />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">

                                <a
                                    href="/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </a>
                                <a
                                    href="/category/Male"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Male
                                </a>
                                <a
                                    href="/category/Female"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Female
                                </a>
                                <a
                                    href="/category/Kids"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Kids
                                </a>
                                <a
                                    href="/products"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    All Products
                                </a>

                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="inline-block rounded-full border border-transparent bg-gray-300 mr-12  px-3 py-3 text-center font-medium text-black hover:scale-110 duration-300 "
                                >
                                    <ShoppingCart />
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
export default Header