import { Container, Row, Col, Button } from "react-bootstrap";
import { Navbar } from "@/components/NavBar";
import { useQuery } from "@tanstack/react-query";
import { getContact } from "@/services/getContacts";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function ContactRequest() {
    const supabase = useSupabaseClient();
    const ContactQuery = useQuery ({
        queryKey: ["name"],
        queryFn: async () => getContact(supabase),
    });

  return (
    <Container>
      <Navbar />
      <Row>
        <Col>
          <h1>Contact waiting</h1>
          {ContactQuery.isLoading && <div>Loading....</div>}
          {ContactQuery.data?.map((contact) => (
            <Li>{contact.id}</Li>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
