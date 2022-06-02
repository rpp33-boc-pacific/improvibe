/* eslint-disable react/display-name */
import React, { useState } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';

export default function Protect (WrappedComponent: any) {

    return function ProtectedComponent () {
      const router = useRouter();
      const { data: session, status } = useSession();

      if (status === "authenticated") {
        router.push('/');
      } else {
        return <WrappedComponent session={session} />;
      }

    };
  }
