"use client";


import {AlertDialogContent, AlertDialogTitle , AlertDialog, AlertDialogHeader, AlertDialogTrigger, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "../ui/alert-dialog";

interface ConfirmModalProps {
    children:React.ReactNode;
    onConfirm:()=>void;
}

export const ConfirmModal = ({
    children,
    onConfirm
}:ConfirmModalProps)=>{
    const handleConfirm = (e:React.MouseEvent<HTMLButtonElement,MouseEvent>) =>{
        e.stopPropagation();
        onConfirm();
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger onClick={(e)=> e.stopPropagation()} asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutly sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={(e)=>e.stopPropagation()}>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleConfirm}>
                        Confirm
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}