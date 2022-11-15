basic.forever(function () {
    if (Maqueen.ReadPatrol(Maqueen.Patrol.PatrolLeft) == 0 && Maqueen.ReadPatrol(Maqueen.Patrol.PatrolRight) == 0) {
        Maqueen.MotorRun(Maqueen.Motors.M1, Maqueen.Dir.CW, 200)
        Maqueen.MotorRun(Maqueen.Motors.M2, Maqueen.Dir.CW, 200)
    }
    if (Maqueen.ReadPatrol(Maqueen.Patrol.PatrolLeft) == 1 && Maqueen.ReadPatrol(Maqueen.Patrol.PatrolRight) == 0) {
        Maqueen.MotorRun(Maqueen.Motors.M1, Maqueen.Dir.CW, 200)
        Maqueen.MotorRun(Maqueen.Motors.M2, Maqueen.Dir.CW, 0)
    }
    if (Maqueen.ReadPatrol(Maqueen.Patrol.PatrolLeft) == 0 && Maqueen.ReadPatrol(Maqueen.Patrol.PatrolRight) == 1) {
        Maqueen.MotorRun(Maqueen.Motors.M1, Maqueen.Dir.CW, 0)
        Maqueen.MotorRun(Maqueen.Motors.M2, Maqueen.Dir.CW, 200)
    }
})
