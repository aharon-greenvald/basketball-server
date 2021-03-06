import {EntityRepository, Repository} from "typeorm";
import { Plstats } from "./plstats.entity";

@EntityRepository(Plstats)
export class PlStatsRepository extends Repository<Plstats> {

 async  createpl(plstats){
        for(let p of plstats.playerStats){
            console.log(p);
            
            const playerStats = new Plstats()
            playerStats.made = p.made
            playerStats.name = p.name
            playerStats.missed = p.missed
            playerStats.points = p.points
            playerStats.percentage = p.percentage
            playerStats.teamName = p.teamName
            playerStats.gameId = p.gameId
           await this.save(playerStats)
        }
    }
    
findAll() {
    return this.find();
  }
  
  findOne(id): Promise<Plstats> {
    return this.findOne({id});
  }
 async findByName(name): Promise<Plstats[]> {
    return await this.find({name});
  }

}