"use client"

import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    QuestionMarkCircleIcon,
    ShoppingBagIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Footer from '@/app/_components/Footer'

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
    categories: [
        {
            name: 'Cookies',
            featured: [
                {
                    name: 'Cookie A',
                    href: '#',
                    imageSrc: 'https://utfs.io/f/3655e4d4-4a9b-4b9e-9a92-3dee068191a7-fqwq6n.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Cookie A',
                    href: '#',
                    imageSrc: 'https://utfs.io/f/3655e4d4-4a9b-4b9e-9a92-3dee068191a7-fqwq6n.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
                {
                    name: 'Cookie A',
                    href: '#',
                    imageSrc: 'https://utfs.io/f/3655e4d4-4a9b-4b9e-9a92-3dee068191a7-fqwq6n.jpg',
                    imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
                },
                {
                    name: 'Cookie A',
                    href: '#',
                    imageSrc: 'https://utfs.io/f/3655e4d4-4a9b-4b9e-9a92-3dee068191a7-fqwq6n.jpg',
                    imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
                },
            ],
        },
        {
            name: 'Breads',
            featured: [
                {
                    name: 'Croissant',
                    href: '#',
                    imageSrc: 'https://utfs.io/f/7b7818e9-9da1-49f4-bf77-6add8eb6ea5c-ie200u.jpeg',
                    imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
                },
                {
                    name: 'Croissant',
                    href: '#',
                    imageSrc: 'https://utfs.io/f/7b7818e9-9da1-49f4-bf77-6add8eb6ea5c-ie200u.jpeg',
                    imageAlt: 'Model wearing light heather gray t-shirt.',
                },
                {
                    name: 'Croissant',
                    href: '#',
                    imageSrc: 'https://utfs.io/f/7b7818e9-9da1-49f4-bf77-6add8eb6ea5c-ie200u.jpeg',
                    imageAlt:
                        'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
                },
                {
                    name: 'Croissant',
                    href: '#',
                    imageSrc: 'https://utfs.io/f/7b7818e9-9da1-49f4-bf77-6add8eb6ea5c-ie200u.jpeg',
                    imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
                },
            ],
        },
    ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' },
    ],
}
const collections = [
    {
        name: "Cookie A",
        href: '#',
        imageSrc: 'https://utfs.io/f/3655e4d4-4a9b-4b9e-9a92-3dee068191a7-fqwq6n.jpg',
        imageAlt: 'Cookie A',
    },
    {
        name: "Cookie B",
        href: '#',
        imageSrc: 'https://utfs.io/f/b3e311f5-7e3e-4472-8d39-3553755db4c3-fqwq5a.jpeg',
        imageAlt: 'Cookie B',
    },
    {
        name: 'Croissant',
        href: '#',
        imageSrc: 'https://utfs.io/f/7b7818e9-9da1-49f4-bf77-6add8eb6ea5c-ie200u.jpeg',
        imageAlt: 'Person sitting at a wooden desk with paper note organizer, pencil and tablet.',
    },
]
const trendingProducts = [
    {
        id: 1,
        name: 'Cookie B',
        color: 'Natural',
        price: '$1.5',
        href: '#',
        imageSrc: 'https://utfs.io/f/b3e311f5-7e3e-4472-8d39-3553755db4c3-fqwq5a.jpeg',
        imageAlt: 'Hand stitched, orange leather long wallet.',
    },
    // More products...
]
const perks = [
    {
        name: 'Free returns',
        imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
        description: 'Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.',
    },
    {
        name: 'Same day delivery',
        imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg',
        description:
            'We offer a delivery service that has never been done before. Checkout today and receive your products within hours.',
    },
    {
        name: 'All year discount',
        imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
        description: 'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
    },
    {
        name: 'For the planet',
        imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
        description: 'We’ve pledged 1% of sales to the preservation and restoration of the natural environment.',
    },
]
const footerNavigation = {
    products: [
        { name: 'Bags', href: '#' },
        { name: 'Tees', href: '#' },
        { name: 'Objects', href: '#' },
        { name: 'Home Goods', href: '#' },
        { name: 'Accessories', href: '#' },
    ],
    company: [
        { name: 'Who we are', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Privacy', href: '#' },
    ],
    customerService: [
        { name: 'Contact', href: '#' },
        { name: 'Shipping', href: '#' },
        { name: 'Returns', href: '#' },
        { name: 'Warranty', href: '#' },
        { name: 'Secure Payments', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Find a store', href: '#' },
    ],
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const MainPage = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pb-2 pt-5">
                                    <button
                                        type="button"
                                        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Links */}
                                <Tab.Group as="div" className="mt-2">
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex space-x-8 px-4">
                                            {navigation.categories.map((category) => (
                                                <Tab
                                                    key={category.name}
                                                    className={({ selected }) =>
                                                        classNames(
                                                            selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                                                            'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                                                        )
                                                    }
                                                >
                                                    {category.name}
                                                </Tab>
                                            ))}
                                        </Tab.List>
                                    </div>
                                    <Tab.Panels as={Fragment}>
                                        {navigation.categories.map((category) => (
                                            <Tab.Panel key={category.name} className="space-y-12 px-4 py-6">
                                                <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                                                    {category.featured.map((item) => (
                                                        <div key={item.name} className="group relative">
                                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                                                            </div>
                                                            <a href={item.href} className="mt-6 block text-sm font-medium text-gray-900">
                                                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                {item.name}
                                                            </a>
                                                            <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                                                                Shop now
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Tab.Panel>
                                        ))}
                                    </Tab.Panels>
                                </Tab.Group>

                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    {navigation.pages.map((page) => (
                                        <div key={page.name} className="flow-root">
                                            <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                                {page.name}
                                            </a>
                                        </div>
                                    ))}
                                </div>




                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <header className="relative">
                <nav aria-label="Top">
                    {/* Top navigation */}
                    <div className="bg-white">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 items-center justify-between">
                                {/* Logo (lg+) */}
                                <div className="hidden lg:flex lg:flex-1 lg:items-center">
                                    <a href="/">
                                        <img
                                            className="h-8 w-auto rounded"
                                            src="https://utfs.io/f/3a19ad33-02e0-43af-80be-85850a2464d5-1zbfv.png"
                                            alt=""
                                        />
                                        <span className="sr-only">La Roti Bakery</span>
                                    </a>
                                </div>

                                <div className="hidden h-full lg:flex">
                                    {/* Flyout menus */}
                                    <Popover.Group className="inset-x-0 bottom-0 px-4">
                                        <div className="flex h-full justify-center space-x-8">
                                            {navigation.categories.map((category) => (
                                                <Popover key={category.name} className="flex">
                                                    {({ open }) => (
                                                        <>
                                                            <div className="relative flex">
                                                                <Popover.Button
                                                                    className={classNames(
                                                                        open ? 'text-indigo-600' : 'text-gray-700 hover:text-gray-800',
                                                                        'relative flex items-center justify-center text-sm font-medium transition-colors duration-200 ease-out'
                                                                    )}
                                                                >
                                                                    {category.name}
                                                                    <span
                                                                        className={classNames(
                                                                            open ? 'bg-indigo-600' : '',
                                                                            'absolute inset-x-0 -bottom-px z-20 h-0.5 transition duration-200 ease-out'
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
                                                                </Popover.Button>
                                                            </div>

                                                            <Transition
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0"
                                                                enterTo="opacity-100"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0"
                                                            >
                                                                <Popover.Panel className="absolute inset-x-0 top-full z-10 bg-white text-sm text-gray-500">
                                                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                                    <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
                                                                    {/* Fake border when menu is open */}
                                                                    <div
                                                                        className="absolute inset-0 top-0 mx-auto h-px max-w-7xl px-8"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <div
                                                                            className={classNames(
                                                                                open ? 'bg-gray-200' : 'bg-transparent',
                                                                                'h-px w-full transition-colors duration-200 ease-out'
                                                                            )}
                                                                        />
                                                                    </div>

                                                                    <div className="relative">
                                                                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                                                            <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                                                                {category.featured.map((item) => (
                                                                                    <div key={item.name} className="group relative">
                                                                                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                                                            <img
                                                                                                src={item.imageSrc}
                                                                                                alt={item.imageAlt}
                                                                                                className="object-cover object-center"
                                                                                            />
                                                                                        </div>
                                                                                        <a href={item.href} className="mt-4 block font-medium text-gray-900">
                                                                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                                            {item.name}
                                                                                        </a>
                                                                                        <p aria-hidden="true" className="mt-1">
                                                                                            Shop now
                                                                                        </p>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Popover.Panel>
                                                            </Transition>
                                                        </>
                                                    )}
                                                </Popover>
                                            ))}

                                            {navigation.pages.map((page) => (
                                                <a
                                                    key={page.name}
                                                    href={page.href}
                                                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                                >
                                                    {page.name}
                                                </a>
                                            ))}
                                        </div>
                                    </Popover.Group>
                                </div>

                                {/* Mobile menu and search (lg-) */}
                                <div className="flex flex-1 items-center lg:hidden">
                                    <button
                                        type="button"
                                        className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                                        onClick={() => setOpen(true)}
                                    >
                                        <span className="sr-only">Open menu</span>
                                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    {/* Search */}
                                    <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Search</span>
                                        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                                    </a>
                                </div>

                                {/* Logo (lg-) */}
                                <a href="#" className="lg:hidden">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt=""
                                        className="h-8 w-auto"
                                    />
                                </a>

                                <div className="flex flex-1 items-center justify-end">
                                    <a href="#" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                                        Search
                                    </a>

                                    <div className="flex items-center lg:ml-8">
                                        {/* Help */}
                                        <a href="#" className="p-2 text-gray-400 hover:text-gray-500 lg:hidden">
                                            <span className="sr-only">Help</span>
                                            <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />
                                        </a>
                                        <a href="#" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                                            Help
                                        </a>

                                        {/* Cart */}
                                        <div className="ml-4 flow-root lg:ml-8">
                                            <a href="#" className="group -m-2 flex items-center p-2">
                                                <ShoppingBagIcon
                                                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                    aria-hidden="true"
                                                />
                                                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                                <span className="sr-only">items in cart, view bag</span>
                                            </a>
                                        </div>
                                        {/* Profile or login */}
                                        <div className="ml-4 flow-root lg:ml-8">
                                            <SignedOut>
                                                <a
                                                    href="/sign-in"
                                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                >
                                                    Log in
                                                </a>
                                            </SignedOut>
                                            <SignedIn>
                                                <div className="leading-6">
                                                    <UserButton afterSignOutUrl="/" />
                                                </div>
                                            </SignedIn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                {/* Hero section */}
                <div className="relative">
                    {/* Background image and overlap */}
                    <div aria-hidden="true" className="absolute inset-0 hidden sm:flex sm:flex-col">
                        <div className="relative w-full flex-1 bg-gray-800">
                            <div className="absolute inset-0 overflow-hidden">
                                <img
                                    src="https://utfs.io/f/3b15098d-5cf3-40e2-9e53-8ef3d14cc3e5-9zp3gy.avif"
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gray-900 opacity-50" />
                        </div>
                        <div className="h-32 w-full bg-white md:h-40 lg:h-48" />
                    </div>

                    <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
                        {/* Background image and overlap */}
                        <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
                            <div className="relative w-full flex-1 bg-gray-800">
                                <div className="absolute inset-0 overflow-hidden">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                                        alt=""
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gray-900 opacity-50" />
                            </div>
                            <div className="h-48 w-full bg-white" />
                        </div>
                        <div className="relative py-32">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">La Roti Bakery</h1>
                            <div className="mt-4 sm:mt-6">
                                <a
                                    href="#"
                                    className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
                                >
                                    Shop
                                </a>
                            </div>
                        </div>
                    </div>

                    <section aria-labelledby="collection-heading" className="relative -mt-96 sm:mt-0">
                        <h2 id="collection-heading" className="sr-only">
                            Collections
                        </h2>
                        <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
                            {collections.map((collection) => (
                                <div
                                    key={collection.name}
                                    className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-h-5 sm:aspect-w-4 sm:h-auto"
                                >
                                    <div>
                                        <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-lg">
                                            <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                                                <img
                                                    src={collection.imageSrc}
                                                    alt={collection.imageAlt}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                                        </div>
                                        <div className="absolute inset-0 flex items-end rounded-lg p-6">
                                            <div>
                                                <p aria-hidden="true" className="text-sm text-white">
                                                    Shop the collection
                                                </p>
                                                <h3 className="mt-1 font-semibold text-white">
                                                    <a href={collection.href}>
                                                        <span className="absolute inset-0" />
                                                        {collection.name}
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <section aria-labelledby="trending-heading">
                    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
                        <div className="md:flex md:items-center md:justify-between">
                            <h2 id="favorites-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                                Trending Products
                            </h2>
                            <a href="#" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
                                Shop the collection
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                            {trendingProducts.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                    <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-sm md:hidden">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Shop the collection
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* <section aria-labelledby="perks-heading" className="border-t border-gray-200 bg-gray-50">
                    <h2 id="perks-heading" className="sr-only">
                        Our perks
                    </h2>

                    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
                        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
                            {perks.map((perk) => (
                                <div
                                    key={perk.name}
                                    className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                                >
                                    <div className="md:flex-shrink-0">
                                        <div className="flow-root">
                                            <img className="-my-1 mx-auto h-24 w-auto" src={perk.imageUrl} alt="" />
                                        </div>
                                    </div>
                                    <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                                        <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                                        <p className="mt-3 text-sm text-gray-500">{perk.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}
            </main>

            <Footer />
        </div>
    )
}

export default MainPage;