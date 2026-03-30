
export const CopyEvent = () => {

    const copyHandler = () => {
        alert("Text is copied to your clipboard!");
    }
    return (
        <p onCopy={copyHandler}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Ea doloremque, cupiditate ut temporibus aut tempora veritatis possimus exercitationem? 
             Iure minus, eveniet cumque soluta aspernatur, quod obcaecati itaque magnam cupiditate hic aut nam! 
             Porro repellendus sapiente unde ipsa fugiat pariatur distinctio cum cupiditate quia quo velit ipsum,
              totam aspernatur nesciunt ex maiores. Quo praesentium inventore voluptate a explicabo nulla beatae, 
              omnis assumenda voluptatem eaque dolore debitis saepe fuga repellendus 
              consequatur aliquid quisquam ipsa voluptates esse quae! Veniam voluptate numquam, 
              animi explicabo architecto porro eaque harum consequatur eos! 
              Aperiam corrupti commodi iste? Tenetur veniam hic ullam accusantium 
              veritatis quas doloribus quidem assumenda!
        </p>
    )
}