import { Controller, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { LocationSchema } from "@/services/locationSchema";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { addLocation } from "@/services/addLocation";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";

export default function CreateLocation() {
    const supabase = useSupabaseClient();
    const router = useRouter();

    const form = useForm({
        defaultValues: {
        name: '',
        address: '',
        city: '',
        County: '',
        state: '',
        },

        resolver: zodResolver(LocationSchema)
        
    });

    const locationQuery = useMutation({
      mutationFn: (data) => addLocation(supabase, data),
    });

    const handleSaveData = async (data) => {
      const createdLocation = await locationQuery.mutateAsync(data)
      console.log(createdLocation);
      router.push('/site')
    };

    return (
      <div>
        <h2>Create Location</h2>
        <Form onSubmit={form.handleSubmit(handleSaveData)}>

<label className="form-label">Name</label>
      <input
        type="text"
        {...form.register("name")}
        className="form-control"
        />
        {form.formState.errors.name && (
          <div className="text-danger">
            {form.formState.errors.name?.message}
          </div>
        )}

<label className="form-label">Address</label>
      <input
        type="text"
        {...form.register("address")}
        className="form-control"
        />
          {form.formState.errors.address && (
          <div className="text-danger">
            {form.formState.errors.address?.message}
          </div>
        )}

<label className="form-label">City</label>
      <input
        type="text"
        {...form.register("city")}
        className="form-control"
        />

<label className="form-label">County</label>
      <input
        type="text"
        {...form.register("county")}
        className="form-control"
        />

<label className="form-label">State</label>
      <input
        type="text"
        {...form.register("State")}
        className="form-control"
        />

<label className="form-label">County</label>
      <Controller control={form.control} name='picture' render={({ field}) => (
      <Imageinput bucket='Locations' value={field.value} onChange={field.onChange} />)} />

      <Button variant="primary" type="submit" disabled={locationQuery.isPending}>
        {locationQuery.isPending ? "Saving data..." : "Submit"}
      </Button>
    </Form>
      </div>
    );
}
//form to supabase