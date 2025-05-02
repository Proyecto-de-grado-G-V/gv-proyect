namespace EventBus;

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Subscription
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; } = string.Empty;

    [BsonElement("EventType")]
    public string EventType { get; set; } = string.Empty;

    [BsonElement("CallbackUrl")]
    public string CallbackUrl { get; set; } = string.Empty;
}
