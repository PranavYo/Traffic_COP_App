import React from 'react'
import { Button, Card, CardBody, CardColumns, CardFooter, CardHeader, CardTitle } from 'reactstrap'

function SingleLocation(props) {
    function archieve(){
        console.log('move to archeive')
    }
  return (
    <div>
        <Card>
            <CardHeader>Location {props.data.id}</CardHeader>
            {
                (props.data.Help) ? 

                <CardFooter>
                    Location: {props.data.Location}<br/>
                    Contact: {props.data.contactNumber}<br/>
                    <Button onClick={archieve}>Send Help</Button>
                </CardFooter>

                : ''
            }
            
            
        </Card>

    </div>
  )
}

export default SingleLocation